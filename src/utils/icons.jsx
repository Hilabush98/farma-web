import {
    HomeOutlined,
    UserOutlined,
    AppstoreOutlined,
    FundTwoTone,
    DatabaseOutlined,
    HddTwoTone,
    IdcardTwoTone,
    SettingOutlined,
    FundOutlined,
    ShoppingCartOutlined,
    PullRequestOutlined,
    TruckOutlined,
    TeamOutlined,
    DeploymentUnitOutlined,
    DesktopOutlined,
} from '@ant-design/icons';

const getIcon = (iconName, iconStyle, keyName) => {
    switch (iconName) {
        case 'HomeOutlined':
            return <HomeOutlined style={iconStyle} key={keyName} />;

        case 'DeploymentUnitOutlined':
            return <DeploymentUnitOutlined style={iconStyle} key={keyName} />;

        case 'DesktopOutlined':
            return <DesktopOutlined style={iconStyle} key={keyName} />;

        case 'TruckOutlined':
            return <TruckOutlined style={iconStyle} key={keyName} />;

        case 'ShoppingCartOutlined':
            return <ShoppingCartOutlined style={iconStyle} key={keyName} />;

        case 'PullRequestOutlined':
            return <PullRequestOutlined style={iconStyle} key={keyName} />;

        case 'DatabaseOutlined':
            return <DatabaseOutlined style={iconStyle} key={keyName} />;

        case 'FundOutlined':
            return <FundOutlined style={iconStyle} key={keyName} />;

        case 'UserOutlined':
            return <UserOutlined style={iconStyle} key={keyName} />;

        case 'AppstoreOutlined':
            return <AppstoreOutlined style={iconStyle} key={keyName} />;

        case 'FundTwoTone':
            return <FundTwoTone style={iconStyle} key={keyName} />;

        case 'HddTwoTone':
            return <HddTwoTone style={iconStyle} key={keyName} />;

        case 'IdcardTwoTone':
            return <IdcardTwoTone style={iconStyle} key={keyName} />;

        case 'SettingOutlined':
            return <SettingOutlined style={iconStyle} key={keyName} />;
        case 'TeamOutlined':
            return <TeamOutlined style={iconStyle} key={keyName} />;

        default:
            <AppstoreOutlined style={iconStyle} key={keyName} />;
            break;
    }
};
export { getIcon };
