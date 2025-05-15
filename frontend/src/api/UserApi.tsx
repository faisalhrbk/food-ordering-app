import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type createUserRequest = {
	auth0Id: string;
	email: string;
};
export const useCreateMyUser = () => {
	const { getAccessTokenSilently } = useAuth0();
	const createMyUserRequest = async (user: createUserRequest) => {
		const accessToken = await getAccessTokenSilently();
		const response = await fetch(`${API_BASE_URL}/api/user`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${accessToken}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(user),
		});
		if (!response.ok) {
			throw new Error("Failed to create user!");
		}
	};
	const {
		mutateAsync: createUser,
		isPending: isLoading,
		isError,
		isSuccess,
	} = useMutation({
		mutationFn: createMyUserRequest,
	});
	return {
		createUser,
		isLoading,
		isError,
		isSuccess,
	};
};


export const useUpdateUser = () => {
	const {getAccessTokenSilently} = useAuth0();
const updateByUserRequest = 
}