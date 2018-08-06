import { css } from 'styled-components';
import Themes from '../../../../Assets/Styles/Themes';
import breakpoint from 'styled-components-breakpoint';

const BigTitle = css`
    text-align:center;
    font-size:${Themes.fontsize.h2};
    line-height:40px;
    font-weight:${Themes.fontWeight.bold};
    color:${Themes.colors.blue};
        ${breakpoint('lg')`
        font-size:${Themes.fontsize.h1};
        line-height:50px;
        `}
`
export default BigTitle;