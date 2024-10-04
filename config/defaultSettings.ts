import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
	pwa?: boolean;
	logo?: string;
	borderRadiusBase: string;
	siderWidth: number;
} = {
	navTheme: 'dark',
	primaryColor: process.env.APP_CONFIG_PRIMARY_COLOR,
	borderRadiusBase: '2px',
	layout: 'side',
	contentWidth: 'Fluid',
	fixedHeader: true,
	fixSiderbar: true,
	colorWeak: false,
	title: process.env.APP_CONFIG_TITLE_NHAN_SU ?? '',
	pwa: false,
	logo: '/logo-text.png',
	iconfontUrl: '',
	headerTheme: 'dark',
	headerHeight: 60,
	siderWidth: 220,
};

export default Settings;
