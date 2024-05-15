import { RTLOGS } from '../modules/Negocio/OracleRetail/index.js';

const getTool = (toolId) => {
    switch (toolId) {
        case 8:
            return <RTLOGS />;

        default:
            return null;
    }
};
export { getTool };
