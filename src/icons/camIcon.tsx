
interface CampIconProps {
    className?: string;
    index?: number;
}

function CampIcon(props: CampIconProps) {

    return (
      <svg  
      viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"
        {...props}
        >
            <path fillRule="evenodd" clipRule="evenodd" d="M0.105918 11.9661C0.274918 12.3051 0.620918 12.5181 0.999918 12.5181H4.66692V12.6851C4.66692 14.4921 6.19292 16.0181 7.99992 16.0181C9.80692 16.0181 11.3339 14.4921 11.3339 12.6851V12.5181H14.9999C15.3789 12.5181 15.7249 12.3051 15.8949 11.9661C16.0639 11.6271 16.0279 11.2221 15.7999 10.9191L12.4909 6.50607C12.3979 4.70407 11.5649 1.88807 8.99992 1.30107V1.01807C8.99992 0.466066 8.55192 0.0180664 7.99992 0.0180664C7.44792 0.0180664 6.99992 0.466066 6.99992 1.01807V1.30107C4.43592 1.88807 3.60292 4.70407 3.50892 6.50607L0.199918 10.9191C-0.027082 11.2221 -0.064082 11.6271 0.105918 11.9661ZM5.29992 7.45107C5.42992 7.27807 5.49992 7.06807 5.49992 6.85107C5.49992 6.70207 5.52892 3.18507 7.99992 3.18507C10.4519 3.18507 10.4989 6.70407 10.4999 6.85107C10.4999 7.06807 10.5709 7.27807 10.6999 7.45107L12.9999 10.5181H2.99992L5.29992 7.45107ZM7.99992 14.0181C8.71092 14.0181 9.33392 13.3951 9.33392 12.6851V12.5181H6.66692V12.6851C6.66692 13.3951 7.28992 14.0181 7.99992 14.0181Z" fill="currentcolor"/>
        </svg>
    )
  }
  export default CampIcon