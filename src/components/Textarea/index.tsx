import React, { TextareaHTMLAttributes } from 'react';

import { Container } from './styles';

type ITextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea: React.FC<ITextareaProps> = ( {...rest} ) => (
    <Container {...rest}/>
);

export default Textarea;