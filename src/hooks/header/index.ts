import { useState } from 'react'
const headLogic = () => {
    const [isSelect, setIsSelect] = useState(false)
    // 显示搜索框
    const switchSelectShow = () => {
        setIsSelect(!isSelect)
    }
    // const opt ionClick = (e) => {
    //     console.log(e)
    // }
    return {
        isSelect,
        switchSelectShow,
        // optionClick
    }
}
export default headLogic