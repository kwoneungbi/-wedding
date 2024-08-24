import styles from './FullScreenMessage.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

interface FullScreenMessageProps {
  type: 'loading' | 'error'
}

function FullScreenMeaage({ type }: FullScreenMessageProps) {
  return (
    <div className={cx('container')}>
      {type === 'loading' ? (
        <Heart />
      ) : (
        <>
          <Error />
          에러가 발생했어요. 잠시 후 다시 시도해주세요.
        </>
      )}
    </div>
  )
}

function Heart() {
  return (
    <svg
      className={cx('ico-heart')}
      height="512px"
      version="1.1"
      viewBox="0 0 512 512"
      width="512px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="_x31_66_x2C__Heart_x2C__Love_x2C__Like_x2C__Twitter">
        <g>
          <path d="M365.4,59.628c60.56,0,109.6,49.03,109.6,109.47c0,109.47-109.6,171.8-219.06,281.271    C146.47,340.898,37,278.568,37,169.099c0-60.44,49.04-109.47,109.47-109.47c54.73,0,82.1,27.37,109.47,82.1    C283.3,86.999,310.67,59.628,365.4,59.628z" />
        </g>
      </g>
      <g id="Layer_1" />
    </svg>
  )
}

function Error() {
  return (
    <svg
      className={cx('ico-error')}
      baseProfile="tiny"
      height="24px"
      id="Layer_1"
      version="1.2"
      viewBox="0 0 24 24"
      width="24px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path d="M12,5.511c0.561,0,1.119,0.354,1.544,1.062l5.912,9.854C20.307,17.842,19.65,19,18,19H6c-1.65,0-2.307-1.159-1.456-2.573   l5.912-9.854C10.881,5.865,11.439,5.511,12,5.511 M12,3.511c-1.296,0-2.482,0.74-3.259,2.031l-5.912,9.856   c-0.786,1.309-0.872,2.705-0.235,3.83S4.473,21,6,21h12c1.527,0,2.77-0.646,3.406-1.771s0.551-2.521-0.235-3.83l-5.912-9.854   C14.482,4.251,13.296,3.511,12,3.511z" />
      </g>
      <g>
        <circle cx="12" cy="16" r="1.3" />
      </g>
      <g>
        <path d="M13.5,10c0-0.83-0.671-1.5-1.5-1.5s-1.5,0.67-1.5,1.5c0,0.199,0.041,0.389,0.111,0.562C11.165,11.938,12,14,12,14   s0.835-2.062,1.391-3.438C13.459,10.389,13.5,10.199,13.5,10z" />
      </g>
    </svg>
  )
}

export default FullScreenMeaage
