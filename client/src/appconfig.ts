const inDebug = true;

export default {
	/** is in development? */
	inDebug: inDebug,
	/** server root folder */
	root: "",
	/** API Base URL */
	apiBaseURL: inDebug ? "http://professordb.elpwc.com/" : "/",
};
