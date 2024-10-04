import axios from '@/utils/axios';
import {
	ip3,
	ipNotif,
	keycloakClientID,
	keycloakTokenEndpoint,
	keycloakUserInfoEndpoint,
	resourceServerClientId,
} from '@/utils/ip';
import queryString from 'query-string';
import type { ESettingKey } from './constant';
import type { ISetting } from './typing';

// export async function getInfo() {
//   return axios.get(`${ip3}/user/me`);
// }

export async function getUserInfo(token?:string) {
	const config = {
		headers: { Authorization: `Bearer ${token}` }
	};
	console.log('con',config)
	return axios.get(`${ip3}/user/me`,config);
}

export async function adminlogin(payload: { username?: string; password?: string }) {
	return axios.post(`${ip3}/auth/login/web`, { ...payload });
}

export async function refreshAccesssToken(payload: { refreshToken: string }) {
	const data = {
		client_id: keycloakClientID,
		grant_type: 'refresh_token',
		refresh_token: payload.refreshToken,
	};

	return axios({
		url: keycloakTokenEndpoint,
		method: 'POST',
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
		data: queryString.stringify(data),
	});
}

export async function getPermission() {
	const data = {
		audience: resourceServerClientId,
		grant_type: 'urn:ietf:params:oauth:grant-type:uma-ticket',
		response_mode: 'permissions',
	};

	return axios({
		url: keycloakTokenEndpoint,
		method: 'POST',
		headers: { 'content-type': 'application/x-www-form-urlencoded' },
		data: queryString.stringify(data),
	});
}

export async function initOneSignal(payload: { playerId: string }) {
	return axios.put(`${ipNotif}/one-signal/user`, payload);
}

export async function deleteOneSignal(data: { playerId: any }) {
	return axios.delete(`${ipNotif}/one-signal/user`, { data });
}

// Cài đặt

export async function getSettingByKey(key: ESettingKey) {
	return axios.get(`${ip3}/setting/${key}/value`);
}

export async function putSetting(data: ISetting) {
	return axios.put(`${ip3}/setting/value`, data);
}
