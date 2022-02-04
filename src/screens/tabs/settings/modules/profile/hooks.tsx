import requests from "@novomarkt/api/requests";
import { LoginResponse } from "@novomarkt/api/types";
import { useCallback, useEffect, useState } from "react";

type ProfileData = Partial<LoginResponse>;

const useProfileHook = () => {
	let [profileData, setProfileData] = useState<ProfileData>();
	let onTextChange = useCallback((key: string) => {
		return (value: string) => {
			//TODO check
			// @ts-ignore
			setProfileData({ ...profileData, [key]: value });
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	let fetchData = async () => {
		try {
			let res = await requests.profile.getProfile();
			setProfileData(res.data.data);
			// console.log(res.data.data, "DASDASDAS");
		} catch (error) {
			// console.error(error);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);

	const onFieldSubmit = async (val: string, key: string) => {
		try {
			let res = await requests.profile.editProfile({
				...profileData,
				[key]: val,
			});
			// console.log(res.data, "UPDATED");
		} catch (error) {
			// console.error(error.response);
		}
	};

	return { profileData, onTextChange, setProfileData, onFieldSubmit };
};

export default useProfileHook;
