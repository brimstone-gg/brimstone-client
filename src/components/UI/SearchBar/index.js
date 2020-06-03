import { useState } from 'react'
import { useRouter } from 'next/router'
import Autosuggest from 'react-autosuggest'

import { agents } from '../../../data/agents.json'
import { maps } from '../../../data/maps.json'
import { sidearms, smgs, shotguns, rifles, snipers, heavies } from '../../../data/weapons.json'

import theme from './theme.styles'

const allWeapons = [ ...sidearms, ...smgs, ...shotguns, ...rifles, ...snipers, ...heavies ]
const allAvailable = [ ...agents, ...maps, ...allWeapons ]

const searchSuggestions = [
  {
    title: 'Agents',
    suggestions: [ ...agents ]
  },
  {
    title: 'Maps',
    suggestions: [ ...maps ]
  },
  {
    title: 'Weapons',
    suggestions: [ ...allWeapons ]
  }
]

const escapeRegexChars = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

const getSuggestions = value => {
  const escapedValue = escapeRegexChars(value.trim())
  if (!escapedValue) return []

  const regex = new RegExp('^' + escapedValue, 'i')

  return searchSuggestions
    .map(section => {
      return {
        title: section.title,
        suggestions: section.suggestions.filter(sug => regex.test(sug.name))
      }
    })
    .filter(section => section.suggestions.length > 0)
}

const getSuggestionValue = suggestion => suggestion.name
const renderSuggestion = suggestion => {
  const image = allAvailable.filter(val => val.name === suggestion.name).map(val => val.images.search)
  return (
    <div className='inline-flex'>
      <img src={image} alt={suggestion.name} className='h-6 w-6 mr-2 rounded-full object-cover' />
      <span className='flex items-center'>{suggestion.name}</span>
    </div>
  )
}
const renderSectionTitle = section => <strong>{section.title}</strong>
const getSectionSuggestions = section => section.suggestions

const SearchBar = ({ type }) => {
  const router = useRouter()
  const [ value, setValue ] = useState('')
  const [ suggestions, setSuggestions ] = useState([])

  const onSuggestionsFetchRequested = ({ value }) => setSuggestions(getSuggestions(value))
  const onSuggestionsClearRequested = () => setSuggestions([])
  const onChange = (event, { newValue, method }) => {
    if (method === 'click' || method === 'enter') {
      const link = allAvailable.filter(val => val.name === newValue).map(val => val.path)[0]
      router.push(link)
    }

    setValue(newValue)
  }

  const renderInputComponent = inputProps => {
    const searchBar = type === 'compact' ? 'nav__search-bar' : 'home__search-bar'
    return (
      <div className={searchBar}>
        <input {...inputProps} />
        <button type='submit' className='search-bar-icon' aria-label='search icon button'>
          <svg className='search-bar-icon-svg' xmlns='http://www.w3.org/2000/svg' version='1.1' viewBox='0 0 56.966 56.966'>
            <path d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z' />
          </svg>
        </button>
      </div>
    )
  }
  const renderSuggestionsContainer = ({ containerProps, children }) => {
    if (!value || (value && suggestions.length === 0)) return

    return (
      <div className='search-bar-suggestions' {...containerProps}>
        {children}
      </div>
    )
  }

  const inputProps = {
    placeholder: 'Search Username, Agents, Maps and Weapons',
    value,
    onChange: onChange
  }

  return (
    <Autosuggest
      theme={type ? theme : undefined}
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={getSuggestionValue}
      renderSuggestion={renderSuggestion}
      renderInputComponent={renderInputComponent}
      multiSection={true}
      renderSectionTitle={renderSectionTitle}
      renderSuggestionsContainer={renderSuggestionsContainer}
      getSectionSuggestions={getSectionSuggestions}
      inputProps={inputProps}
    />
  )
}

export default SearchBar
