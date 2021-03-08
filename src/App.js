import React from 'react'
import Header from './components/Header'
import Section from './components/Section'
import './assets/scss/App.scss'

const warningTooltip =
    'Dữ liệu được thu thập từ nhiều nguồn cập nhật vào những thời điểm khác nhau và ' +
    'có thể không phải lúc nào cũng phù hợp. ' +
    'Một số khu vực có thể không cung cấp bảng phân tích ' +
    'đầy đủ về số liệu thống kê liên quan đến COVID-19.'

const App = () => {
    return (
        <React.Fragment>
            <Header
                title="Diễn biến dịch COVID-19"
                warningTooltip={warningTooltip}
            />
            <Section />
        </React.Fragment>
    )
}

export default App
