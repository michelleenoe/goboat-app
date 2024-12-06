"use client";

export const RouteIcon = ({ width = 30, height = 30, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 22"
    width={width}
    height={height}
    className={`text-darkBlue ${className}`}
    fill="currentColor"
    fillRule="nonzero"
  >
    <g>
      <path d="M11.0059 3.14453c0 .27004.0341.53231.102.78125H5.14648c-2.19726 0-3.57421 1.03516-3.57421 2.66602 0 1.66015 1.47461 2.7832 4.41406 3.08593l5.56637.58597c3.7891.3808 5.752 2.1191 5.752 4.7754 0 2.5976-1.9922 4.2382-5.1465 4.2382H6.19241c.07069-.2548.10642-.5237.10642-.8007 0-.2664-.03341-.5254-.09989-.7715h5.95926c2.1973 0 3.5742-1.0352 3.5742-2.666 0-1.6602-1.4844-2.7832-4.414-3.086l-5.58598-.5859C1.95312 10.9863 0 9.24805 0 6.5918c0-2.59766 1.99219-4.23828 5.14648-4.23828h5.96492c-.0701.25199-.1055.51759-.1055.79101Z" strokeWidth="6"></path>
      <path d="M3.1543 21.6309c1.73828 0 3.14453-1.4161 3.14453-3.1543 0-1.7286-1.40625-3.1446-3.14453-3.1446S.00976562 16.748.00976562 18.4766c0 1.7382 1.40625438 3.1543 3.14453438 3.1543ZM14.1504 6.29883c1.748 0 3.1543-1.41602 3.1543-3.1543C17.3047 1.41602 15.8984 0 14.1504 0c-1.7285 0-3.1445 1.41602-3.1445 3.14453 0 1.73828 1.416 3.1543 3.1445 3.1543Zm0-1.53321c-.8984 0-1.6113-.71289-1.6113-1.62109 0-.9082.7226-1.61133 1.6113-1.61133.918 0 1.6211.70313 1.6211 1.61133 0 .9082-.7031 1.62109-1.6211 1.62109Z" strokeWidth="6"></path>
    </g>
  </svg>
);
export const GeolocateIcon = ({ width = 30, height = 30, className = "" }) => (
  <Image
    src="/icons/map-pin.svg"
    alt="Geolocate Icon"
    width={width}
    height={height}
    className={className}
  />
);

export const ToggleMapIcon = ({ width = 30, height = 30, className = "" }) => (
  <Image
    src="/icons/Layer.svg"
    alt="Toggle Map Icon"
    width={width}
    height={height}
    className={className}
  />
);