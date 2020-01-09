import React from "react";

import "./Jobs.css";

const Emoji = props => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);

const Jobs = () => {
  return (
    <div className="employment-container">
      <div className="employment-hours">
        <h1 className="employment-heading">飯局女孩</h1>
        <p className="p-hours">
          <span id="underline">工作性質</span>
          ：陪同出席宴會，跟客人互動或在旁協助客人與他生意往來的人士交流，
          <br />
          維持現場氣氛及桌面服務，需有相對的氣質及內涵應對現場來賓！
          <br />
          <span id="underline">時段</span>
          ：採預約制，前一天或當天六小時前預約，晚餐六點之後，
          <br />
          基本四小時，時段依客人而定。
          <br />
          <span id="underline">工作地點</span>：各大知名飯店及餐廳，私人招待所。
        </p>
      </div>
      <div className="post-employment-hours"></div>
      <div className="employment-role">
        <h1 className="employment-heading">合法店家高薪誠徵~聊天女孩</h1>
        <p className="employment-incentives">
          <Emoji symbol="🔥" />
          保障月薪6萬起 + 業績獎金
          <br />
          <Emoji symbol="🔥" />
          絕對無色情
          <br />
          <Emoji symbol="⭐" />
          適合個性活潑、愛聊天、愛交朋友的妳
          <br />
          <Emoji symbol="🈲" />
          需年滿18
          <br />
          <Emoji symbol="🈵" />
          名額有限，即將額滿
          <br />
          <Emoji symbol="🔥" />
          有興趣趕緊私訊我
          <br />
        </p>
      </div>
      <div className="post-employment-role"></div>
      <div className="employment-application">
        <form
          className="employment-form"
          action="employment-application"
          method="post"
          data-netlify="true"
        >
          <label>姓名:</label>
          <br />
          <input type="text" name="your-name" value="" />
          <br />
          <label>年齡:</label>
          <br />
          <input type="number" name="age" value="" />
          <br />
          <label>聯絡電話:</label>
          <br />
          <input type="number" name="phone-number" value="" />
          <br />
          <label>Line:</label>
          <br />
          <input type="text" name="form-line" value="" />
          <br />
          <button className='button-submit' type="submit" name="form-submit">
            送出
          </button>
          <br />
        </form>
      </div>
    </div>
  );
};

export default Jobs;
