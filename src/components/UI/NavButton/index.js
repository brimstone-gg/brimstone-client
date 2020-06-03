import Link from 'next/link'

const Button = props => {
  const { children, href, type } = props

  const typeClass = type === 'regular' ? 'NavButton-module--default' : 'NavButton-module--reversed'

  return (
    <Link href={href}>
      <a>
        <button className={`NavButton-module--button NavButton-module ${typeClass}`} type='button' aria-label='navigation button'>
          <p className='NavButton-module--label'>
            <span className='NavButton-module--hover-mask NavButton-module--red'></span>
            <span className='NavButton-module--label-text'>{children}</span>
          </p>
        </button>
      </a>
    </Link>
  )
}

export default Button
