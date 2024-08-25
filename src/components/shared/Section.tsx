import classNames from 'classnames/bind'
import styles from './Section.module.scss'

const cx = classNames.bind(styles)

function Section({
  children,
  className,
  title,
}: {
  children: React.ReactNode
  className?: String
  title?: string
}) {
  return (
    <section className={cx(['container', className])}>
      {title ? <div className={'txt-title'}>{title}</div> : null}
      {children}
    </section>
  )
}

export default Section
