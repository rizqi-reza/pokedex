import styled from '@emotion/styled';
import { ICard } from '@interfaces/icard';

export const Card = styled.div<ICard>(({ background, height }) => ({
  position: 'relative',
  height: height || 'auto',
  boxShadow: '0 4px 16px 0 rgba(0,0,0,0.2)',
  borderRadius: 12,
  padding: 12,
  zIndex: 99,
  overflow: 'hidden',
  backgroundColor: background ? background : '#fff',
}));

export const CardHeader = styled.div({
  color: '#000',
  fontWeight: 'bold',
  display: 'flex',
  justifyContent: 'space-between',
  margin: 0,
});

export const CardBadge = styled.h1({
  color: '#fff',
  fontSize: 14,
  margin: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  padding: '4px 8px',
  borderRadius: 16,
  wordBreak: 'break-word',
});

export const CardSubBadge = styled.label({
  color: '#fff',
  height: 'fit-content',
  fontSize: 12,
  margin: '0 0 0 8px',
  backgroundColor: 'rgba(0, 0, 0, 0.2)',
  padding: '4px 8px',
  borderRadius: 16,
});

export const CardBody = styled.div({
  color: '#000',
  marginTop: 8,
});

export const CardImage = styled.img({
  position: 'absolute',
  float: 'right',
  maxWidth: 96,
  right: -5,
  bottom: -5,
  borderRadius: '50%',
  zIndex: 999,
});

export const CardBackground = styled.img({
  position: 'absolute',
  maxWidth: 115,
  right: -15,
  bottom: -15,
  opacity: 0.2,
  transform: 'rotate(-10deg)',
  zIndex: 99,
});
