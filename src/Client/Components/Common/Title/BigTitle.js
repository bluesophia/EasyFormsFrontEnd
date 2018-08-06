import { css } from 'styled-components';
import Themes from '../../../../Assets/Styles/Themes';
import breakpoint from 'styled-components-breakpoint';

const BigTitle = css`
    font-size:${Themes.fontsize.h2};
    color:white;
    fond-weight:${Themes.fontWeight.regular};
        ${breakpoint('md')`
            font-size:${Themes.fontsize.h1};
        `}
`
export default BigTitle;