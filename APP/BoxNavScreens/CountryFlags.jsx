import { View, Text } from 'react-native'
import React from 'react'
import Flag from 'react-native-flags'

export default function CountryFlags({countryCode}) {
  return (
     <Flag countryCode={countryCode} style={{ width: 24, height: 16 }} />

  )
}