import classNames from 'classnames/bind'

import styles from './App.module.scss'

import FullScreenMeaage from '@shared/FullScreenMessage'

import Heading from './components/sections/Heading'
import Video from './components/sections/video'

import { Wedding } from '@models/wedding'

import { useEffect, useState } from 'react'
import ImageGallery from './components/sections/ImageGallery'
const cx = classNames.bind(styles)

function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  // 1. wedding 데이터 호출
  useEffect(() => {
    setLoading(true)
    // callback, promis, async/await 세가지 방법으로 비동기 처리 가능
    fetch('http://localhost:8888/wedding')
      .then((res) => {
        if (res.ok === false) {
          throw new Error('청첩장 정보를 불러오지 못했습니다.')
        }
        return res.json()
      })
      .then((data) => {
        setWedding(data)
      })
      .catch((e) => {
        console.log('에러발생', e)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <FullScreenMeaage type="loading" />
  }

  if (error) {
    return <FullScreenMeaage type="error" />
  }

  if (wedding === null) {
    return null
  }

  const { date, galleryImages } = wedding

  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Video />
      <ImageGallery images={galleryImages} />
      {JSON.stringify(wedding)}
    </div>
  )
}

export default App
