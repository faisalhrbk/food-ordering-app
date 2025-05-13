import { type AppState, Auth0Provider, User } from "@auth0/auth0-react";
type Props = {
	children: React.ReactNode;
};

const AuthOProviderWithNavigate = ({ children }: Props) => {
	const domain = import.meta.env.VITE_AUTH0_DOMAIN;
	const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
	const redirect_uri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
	if (!domain || !clientId || !redirect_uri)
		throw new Error("unable to initialize auth");
	const onRedirectCallback = (AppState?: AppState, user?: User) => {
        console.log(user)
    };
	return (
		<Auth0Provider
			domain={domain}
			clientId={clientId}
			authorizationParams={{
				redirect_uri: redirect_uri,
			}}
			onRedirectCallback={onRedirectCallback}
		>
			{children}
		</Auth0Provider>
	);
};

export default AuthOProviderWithNavigate;
