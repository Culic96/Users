import styled from 'styled-components';

export const GridWrapper = styled.div({
    paddingTop: '2rem',
    width: '85vw',
    height: '100vh',
    marginLeft: '15vw',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'row',
    gap: '2rem',
});

export const ScrollContainer = styled.div({
    maxHeight: '120%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    overflowY: 'scroll',
    userSelect: 'none',
});

export const AuctionCardHolder = styled.div({
    display: 'grid',
    height: '5000px',
    gridTemplateColumns: '300px 300px 300px ',
    gridAutoRows: '300px',
    gridAutoFlow: 'row',
    columnGap: '30px',
    rowGap: '30px',
    alignItems: 'top',
    alignContent: 'top',
});

export const AuctionItem = styled.div({
    width: '300px',
    height: '300px',
    padding: '2rem',
    backgroundColor: '#white',
    textAlign: 'center',
    margin: '1rem auto',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'column',
    color: '#22333B',
    boxShadow:
        'rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px',
});
