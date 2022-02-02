import { StyleSheet, Text, View,Image, TouchableWithoutFeedback, ScrollView, Dimensions } from 'react-native';
import React,{useEffect, useState} from 'react';
import { getImages } from '../services/eventService';

const width = Dimensions.get("screen").width;
const heigth = Dimensions.get("screen").height/4;

export default function Images({ images }) {

    const [ img, setImg ] = useState();

    useEffect(() => {
            var data = {
              rep : Object.keys(images)[0],
              imgs: images[Object.keys(images)[0]]
            }
            getImages(data, (res) => {
              var imge = []
              for(let imag of res.images){
                imge.push("data:image/jpg;base64," + imag);
              }
              setImg(imge);
            }, (err) => {
                console.log(err.message);
            })
        }, []);
    
  return (
    <ScrollView 
    pagingEnabled
    showsHorizontalScrollIndicator={false}
    horizontal={true}
  >
    <TouchableWithoutFeedback style={{ width: "100%" }}>
      <>
      { img && (
            img.map( (val, key) => (
              <Image key={key}  source={{ uri: val }} style={{ width: width, height: heigth, resizeMode: "contain" }} />
            ) ) 
            )
          }
    </>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
