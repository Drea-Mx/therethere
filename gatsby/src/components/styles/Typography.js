import { createGlobalStyle } from 'styled-components';

import quawoff from '../../assets/fonts/QuadrantTextMono-Regular.woff';
import quaeot from '../../assets/fonts/QuadrantTextMono-Regular.eot';
import quattf from '../../assets/fonts/QuadrantTextMono-Regular.ttf';
import quawoff2 from '../../assets/fonts/QuadrantTextMono-Regular.woff2';

import quaiteot from '../../assets/fonts/QuadrantTextMono-RegularItalic.eot';
import quaitttf from '../../assets/fonts/QuadrantTextMono-RegularItalic.ttf';
import quaitwoff from '../../assets/fonts/QuadrantTextMono-RegularItalic.woff';
import quaitwoff2 from '../../assets/fonts/QuadrantTextMono-RegularItalic.woff2';

export const Typography = createGlobalStyle`
@font-face {
    font-family: 'Quadrant Text Mono';
    src: url('${quaeot}');
    src: url('${quaeot}?#iefix') format('embedded-opentype'),
        url('${quawoff2}') format('woff2'),
        url('${quawoff}') format('woff'),
        url('${quattf}') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Quadrant Text Mono Italic';
    src: url('${quaiteot}');
    src: url('${quaiteot}?#iefix') format('embedded-opentype'),
        url('${quaitwoff2}') format('woff2'),
        url('${quaitwoff}') format('woff'),
        url('${quaitttf}') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
:root {
    --regular: 'Quadrant Text Mono', monospace;
    --italic: 'Quadrant Text Mono Italic', monospace;
}

#top .container .title p {
    letter-spacing: 1px;
}

p {
    line-height: 1.6;
}
`