import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const DesktopForm = () => {
    return (
        <div className="desktop--form">
        <form action="">
          <FontAwesomeIcon icon={["fas", "search"]} />
          <input type="text" placeholder="キーワードを入力" />
        </form>
        </div>
    )
}

export default DesktopForm
