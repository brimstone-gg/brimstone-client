import Link from 'next/link'

const Button = props => {
  const { children, href, type, submit } = props

  const typeClass = type === 'regular' ? 'Button-module--default' : 'Button-module--reversed'
  const btnType = submit ? 'submit' : 'button'

  const MyButton = () => (
    <button className={`Button-module--button Button-module ${typeClass}`} type={btnType} aria-label='button'>
      <p className='Button-module--label'>
        <span className='Button-module--hover-mask Button-module--red'></span>
        <span className='Button-module--label-text'>{children}</span>
      </p>
    </button>
  )

  return (
    <>
      {href ? (
        <Link href={href}>
          <a>
            <MyButton />
          </a>
        </Link>
      ) : (
        <MyButton />
      )}
    </>
  )
}

export default Button
