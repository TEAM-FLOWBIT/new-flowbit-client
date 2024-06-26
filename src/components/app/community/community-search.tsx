import { css } from "@emotion/react";
import Cursor from "@/assets/Cursor.png";
import S1 from "@/components/common/text/S1";
import Glass from "@/assets/Glass.svg";
import B2 from "@/components/common/text/B2";
import Tag from "@/components/common/tag";

const TAG_LIST = ["#비트코인", "#이더리움", "#리플"];

export default function CommunitySearch() {
  return (
    <aside
      css={css`
        display: block;
        width: 260px;
      `}
    >
      {/* Title */}
      <header
        css={css`
          display: flex;
          align-items: center;
          gap: 5px;
          margin-bottom: 17px;
        `}
      >
        <img
          css={css`
            width: 24px;
            height: 24px;
          `}
          src={Cursor}
          alt="커서 이미지"
        />
        <S1>무엇을 찾고 계신가요?</S1>
      </header>
      {/* Layout */}
      <div
        css={css`
          padding: 20px 18px;
          border: 1px solid #eeeeee;
          display: flex;
          flex-direction: column;
          gap: 28px;
          border-radius: 5px;
        `}
      >
        {/* Search Bar */}
        <div
          css={css`
            display: flex;
            align-items: center;
            justify-content: space-around;
            border: 1px solid #f5f5f5;
            border-radius: 5px;
            background-color: #fafafa;
            padding: 7px 15px;
          `}
        >
          <input
            css={css`
              font-size: 14px;
              line-height: 22px;
              background-color: #fafafa;
              color: #757575;
              border: none;
              outline: none;
            `}
            type="text"
            placeholder="검색어를 입력하세요."
          />
          <img src={Glass} alt="glass" />
        </div>
        {/* Search By Tag */}
        <div>
          <div
            css={css`
              margin-bottom: 10px;
            `}
          >
            <B2>태그 검색</B2>
          </div>
          <div>
            {TAG_LIST.map((tag) => {
              return <Tag>{tag}</Tag>;
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}
