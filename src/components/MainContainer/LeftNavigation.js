import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const LeftNavigation = () => {
    return (
        <div className="left__navigation">
            <ul>
                <li className="active"><FontAwesomeIcon icon={["fas", "chart-line"]} /> トレンド</li>
                <li><FontAwesomeIcon icon={["fas", "list-ul"]} /> タイムライン</li>
                <li><FontAwesomeIcon icon={["fas", "tags"]} /> タグフォールド</li>
                <li><FontAwesomeIcon icon={["fas", "flag-checkered"]} /> マイルストーン</li>
            </ul>
        </div>
    )
}

export default LeftNavigation
