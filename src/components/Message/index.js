import React from 'react';
import * as style from './styles';

// send or receive 를 구분하여 return 하도록 설계
function Message(props) {
  if (props.send) {
    return (
      <style.MessageWrapper send>
        {props.children}
      </style.MessageWrapper>
    );
  } else {
    return (
      <style.MessageContainer>
        {props.showThumbnail
          && <style.ThumbnailPhoto src="/images/bot_thumbnail.png" alt="AI BOT" width="20px" />}
        <style.MessageContent>
          {props.showThumbnail && '{BotName}'}
          <style.MessageWrapper showThumbnail={props.showThumbnail}>
            {props.children}
          </style.MessageWrapper>
        </style.MessageContent>
      </style.MessageContainer>
    );
  }
}

export default React.memo(Message);
