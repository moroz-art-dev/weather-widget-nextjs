export const getUserLocation = (): Promise<GeolocationPosition> => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        resolve,
        (error: GeolocationPositionError) => {
          switch (error.code) {
            case error.PERMISSION_DENIED:
              reject(new Error('User denied the request for Geolocation.'));
              break;
            case error.POSITION_UNAVAILABLE:
              reject(new Error('Location information is unavailable.'));
              break;
            case error.TIMEOUT:
              reject(new Error('The request to get user location timed out.'));
              break;
            default:
              reject(
                new Error('An unknown error occurred while fetching location.')
              );
              break;
          }
        }
      );
    } else {
      reject(new Error('Geolocation is not supported by this browser.'));
    }
  });
};
