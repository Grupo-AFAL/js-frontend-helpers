const API_URL = 'https://maps.googleapis.com/maps/api/js'
const CALLBACK_NAME = '__googleMapsApiOnLoadCallback'

// const GOOGLE_MAPS_API_KEY = 'AIzaSyDL1sYbvqfeXX_5vah8L-RmnRSPOnQVEKs' // fedegl key
const GOOGLE_MAPS_API_KEY = 'AIzaSyBRTHabjOtMS_Nc2f9qQSmr1aS6ckSIJT4' // AFAL Key
const optionsKeys = ['channel', 'client', 'key', 'language', 'region', 'v']

export default function (options = {}) {
  options.key = GOOGLE_MAPS_API_KEY

  return new Promise((resolve, reject) => {
    // Hook up the on load callback
    window[CALLBACK_NAME] = function () {
      resolve(window.google.maps)
      delete window[CALLBACK_NAME]
    }

    // Prepare the `script` tag to be inserted into the page
    const scriptElement = document.createElement('script')
    const params = [`callback=${CALLBACK_NAME}`]
    optionsKeys.forEach(key => {
      if (options[key]) {
        params.push(`${key}=${options[key]}`)
      }
    })
    if (options.libraries && options.libraries.length) {
      params.push(`libraries=${options.libraries.join(',')}`)
    }
    scriptElement.src = `${options.apiUrl || API_URL}?${params.join('&')}`

    // Insert the `script` tag
    document.body.appendChild(scriptElement)
  })
}
