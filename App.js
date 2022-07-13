import React from 'react'
import { Image, Text, View, ScrollView } from 'react-native'

import Familia from './assets/capa.png'
import Casal from './assets/casal.png'
import Filhos from './assets/filhos.png'
import Vovo from './assets/vovo.png'
import Irmas from './assets/irmaes.png'

import estilos from './estilos'

export default function App() {
  return (
    <View  >
      <ScrollView >
      <View style={estilos.fundo} >
        <Text style={estilos.titulo}>Família Simpsons</Text>
        <Image source={Familia} style={estilos.imgfamilia} />

        <View style={estilos.box}>
          <Image source={Casal} style={estilos.imgbox} />
          <Text style={estilos.titulobox}>O Casal</Text>
          <Text style={estilos.paragrafobox}>
            Homer Jay Simpson é o pai e patriarca da família Simpsons.
          </Text>
          <Text style={estilos.paragrafobox}>
            Marjorie Jacqueline "Marge" Bouvier Simpson é a esposa de Homer
            Simpson e mãe de Lisa, Bart e Maggie Simpson na série animada Os
            Simpsons.
          </Text>
        </View>

        <View style={estilos.box}>
          <Image source={Filhos} style={estilos.imgbox} />
          <Text style={estilos.titulobox}>Os Filhos</Text>
          <Text style={estilos.paragrafobox}>
            Bartholomew JoJo ou apenas Bart é o filho mais velho e mais travesso
          </Text>
          <Text style={estilos.paragrafobox}>
            Lisa Marie é a filha do meio e a mais inteligente.
          </Text>
          <Text style={estilos.paragrafobox}>
            Margaret Evelyn Lenny ou apenas Maggie é o bebê da casa.
          </Text>
        </View>

        <View style={estilos.box}>
          <Image source={Vovo} style={estilos.imgbox} />
          <Text style={estilos.titulobox}>O Vovô</Text>
          <Text style={estilos.paragrafobox}>
            Abraham Jebediah "Abe" Simpson II, mais conhecido como Vovô é o pai
            de Hommer simpson
          </Text>
        </View>

        <View style={estilos.box}>
          <Image source={Irmas} style={estilos.imgbox} />
          <Text style={estilos.titulobox}>As Cunhadas</Text>
          <Text style={estilos.paragrafobox}>
            Patty e Selma são as irmães de Margie e vivem de forma 'largada'.
          </Text>
        </View>
        </View>
      </ScrollView>
    
    </View>
  )
}
