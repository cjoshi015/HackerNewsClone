import React, { Component } from 'react';
import styled from 'styled-components';
import getsitename from './getsitename';
import Timeago from 'timeago'
import upvoteimg from '../image/upvote.png'

const ListItem =({title,url,author,points,num_comments,objectID,created_at,hideeventhandler,upvotehandler}) =>{
        
    const hn_root = 'https://news.ycombinator.com'
    const hn_user  = `${hn_root}/user?id=${author}`;
    const site = getsitename(url) || 'new.ycombinator.com';
    var count = localStorage.getItem(objectID); 
    localStorage.setItem(objectID,count);
    
    return(

            <Item id={objectID}>
                <ExternalLink href={url} target="_blank">
                    <Title>{title} <Host>({site})</Host></Title>
                </ExternalLink>    
                <Description>
                    <a onClick={upvotehandler} href=""> [ Upvote {count} ]</a>

                    { points} points by {''}
                    <CommentLink href={hn_user} target="_blank">
                        {author}
                    </CommentLink>
                    {" "+created_at+" "}
                    {' | '}
                    <a onClick={hideeventhandler} className="cursorchange"> Hide </a>
                    <CommentLink>
                        {num_comments} Comments
                    </CommentLink>
                </Description>
            </Item>
        );
};

const Item = styled.li`
  border-bottom: 1px solid ${({ theme }) => theme.border};
  padding: 14px 24px;
  &:last-child {
    border-bottom: none;
  }
`;

const Title = styled.h3`
  color: ${({ theme }) => theme.text};
  margin-top: 0;
  margin-bottom: 6px;
  font-weight: 400;
  font-size: 16px;
  letter-spacing: 0.4px;
`;

const upvotehtml = styled.small`
  font-size: 12px;
  cursor: pointer;
`
const Host = styled.span`
  color: ${({ theme }) => theme.textSecondary};
  font-size: 12px;
`;

const ExternalLink = styled.a`
  color: ${({ theme }) => theme.text};
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
`;

const Description = styled.div`
  font-size: 14px;
  color: ${({ theme }) => theme.textSecondary};
`;

const CommentLink = styled.a`
  color: ${({ theme }) => theme.textSecondary};
  &:visited {
    color: ${({ theme }) => theme.textSecondary};
  }
`;



export default ListItem;