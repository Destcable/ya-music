import { css } from "@emotion/css";

export const sidebarStyle = css({ 
    width: '200px',
    backgroundColor: '#ffffff',
    borderRight: `1px solid #e1e1e1`,
})

export const sidebarLinkStyle = css({ 
    display: 'block',
    color: 'inherit',
    textDecoration: 'none',
    padding: '5px 0',
    '&.active': {
        fontWeight: 'bold',
    }
})