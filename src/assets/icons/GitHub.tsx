import { FunctionComponent, SVGProps } from 'react';

interface GitHubProps extends SVGProps<SVGSVGElement> {}

const GitHub: FunctionComponent<GitHubProps> = ({ fill, className }) => {
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M11.0343 25.156C11.0343 25.28 10.8952 25.3793 10.7198 25.3793C10.5202 25.3979 10.381 25.2986 10.381 25.156C10.381 25.0319 10.5202 24.9326 10.6956 24.9326C10.877 24.914 11.0343 25.0133 11.0343 25.156ZM9.15323 24.8768C9.11089 25.0009 9.23186 25.1435 9.41331 25.1808C9.57056 25.2428 9.75202 25.1808 9.78831 25.0567C9.8246 24.9326 9.70968 24.79 9.52823 24.7341C9.37097 24.6907 9.19556 24.7527 9.15323 24.8768ZM11.8266 24.7713C11.6512 24.8148 11.5302 24.9326 11.5484 25.0753C11.5665 25.1994 11.7238 25.28 11.9052 25.2366C12.0806 25.1932 12.2016 25.0753 12.1835 24.9512C12.1653 24.8334 12.002 24.7527 11.8266 24.7713ZM15.8065 1C7.41734 1 1 7.53216 1 16.1362C1 23.0158 5.22177 28.9028 11.252 30.9747C12.0262 31.1174 12.2984 30.6273 12.2984 30.2241C12.2984 29.8395 12.2802 27.718 12.2802 26.4152C12.2802 26.4152 8.04637 27.3457 7.15726 24.5666C7.15726 24.5666 6.46774 22.7614 5.47581 22.2962C5.47581 22.2962 4.09073 21.3223 5.57258 21.3409C5.57258 21.3409 7.07863 21.4649 7.90726 22.9414C9.23185 25.3359 11.4516 24.6473 12.3165 24.2379C12.4556 23.2453 12.8488 22.5567 13.2843 22.1473C9.90323 21.7627 6.49194 21.2602 6.49194 15.2926C6.49194 13.5867 6.95161 12.7306 7.91935 11.6388C7.7621 11.2356 7.24798 9.57307 8.07661 7.4267C9.34073 7.02348 12.25 9.10161 12.25 9.10161C13.4597 8.75422 14.7601 8.57433 16.0484 8.57433C17.3367 8.57433 18.6371 8.75422 19.8468 9.10161C19.8468 9.10161 22.756 7.01728 24.0202 7.4267C24.8488 9.57927 24.3347 11.2356 24.1774 11.6388C25.1452 12.7368 25.7379 13.5929 25.7379 15.2926C25.7379 21.2788 22.1754 21.7565 18.7944 22.1473C19.3508 22.6374 19.8226 23.5679 19.8226 25.0257C19.8226 27.1162 19.8044 29.703 19.8044 30.2117C19.8044 30.6149 20.0827 31.105 20.8508 30.9623C26.8992 28.9028 31 23.0158 31 16.1362C31 7.53216 24.1956 1 15.8065 1ZM6.87903 22.3955C6.8004 22.4575 6.81855 22.6002 6.92137 22.718C7.01815 22.8173 7.15726 22.8607 7.23589 22.7801C7.31452 22.718 7.29637 22.5753 7.19355 22.4575C7.09677 22.3582 6.95766 22.3148 6.87903 22.3955ZM6.22581 21.893C6.18347 21.9736 6.24395 22.0729 6.36492 22.1349C6.46169 22.1969 6.58266 22.1783 6.625 22.0915C6.66734 22.0108 6.60685 21.9116 6.48589 21.8496C6.36492 21.8123 6.26815 21.8309 6.22581 21.893ZM8.18548 24.1014C8.08871 24.182 8.125 24.3681 8.26411 24.486C8.40323 24.6287 8.57863 24.6473 8.65726 24.548C8.73589 24.4674 8.6996 24.2813 8.57863 24.1634C8.44556 24.0207 8.26411 24.0021 8.18548 24.1014ZM7.49597 23.1895C7.39919 23.2515 7.39919 23.4128 7.49597 23.5555C7.59274 23.6982 7.75605 23.7602 7.83468 23.6982C7.93145 23.6175 7.93145 23.4562 7.83468 23.3136C7.75 23.1709 7.59274 23.1088 7.49597 23.1895Z"
                fill={fill}
            />
        </svg>
    );
};

export default GitHub;
