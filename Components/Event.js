import React, {useState,useEffect}  from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableWithoutFeedback,Image} from 'react-native';
import colors from '../helpers/colors';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { Button } from 'react-native-elements';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import WebViewQuillJS from 'react-native-webview-quilljs';
import {getUser,getEventInfo, addEventToUser, decNbrPlace, deleteEventFromUser, IncNbrPlace} from '../services/eventService';
import { checkFavorite, favoriteEvent }from '../services/FavorisService';
import { checkParticipation } from '../services/userService';

import Images from "./Images";

export default function Event( {id}) {
      const [heureDebutActivity,setHeureDebutActivity]=useState("")
      const [nameActivity,setNameActivity]=useState("")
      const [event, setEvenement]=useState()
      const [Organisateur, setOrganisateur]=useState() 
      const [favoris, setFavoris]=useState(false)
      const [Participation,setParticipation]=useState(false)
      useEffect(()=>{
        getEventInfo({id:"61f3c07fe880f28fa1054ec7"}, (res)=>{
            const idOrg=res.evenement.idOrganisateur;
            getUser({id:idOrg},(res)=>{
                setOrganisateur(res.user)
                checkFavorite({userId:"61f1ca6b02e2ddbab89b0fc2",eventId:"61f3c07fe880f28fa1054ec7"}, (res)=>{
                    setFavoris(true);
                })
                checkParticipation({userId:"61f1ca6b02e2ddbab89b0fc2",eventId:"61f3c07fe880f28fa1054ec7"}, (res)=>{
                    setParticipation(true);// change l'etat à l'écran à annuler
                })
            },(err)=>{
                alert(err.message)}
            )
            setEvenement(res.evenement) 
        },(err)=>{
            alert(err.message)
        })
      },[])

      function HourActivity(val){
          setHeureDebutActivity(val.name)
          setNameActivity(val.content)

      }
      function handleFavoris(){
          setFavoris(!favoris)//si c true devient false
          const object={ 
              userId:"61f1ca6b02e2ddbab89b0fc2",
              eventId:"61f3c07fe880f28fa1054ec7",
              plus: !favoris
          }
          favoriteEvent(object,(res)=>{
              console.log(res)
          },(err)=>{
              alert(err.message)
          })

      }

    function Participer(){
          const object={ 
              userId:"61f1ca6b02e2ddbab89b0fc2",
              eventId:"61f3c07fe880f28fa1054ec7",}
             if( !Participation){
                 decNbrPlace({eventId:"61f3c07fe880f28fa1054ec7"},(res)=>{
                 addEventToUser(object,(res)=>{
                        setParticipation(true);
                        })
                    },(err)=>{
                    alert(err.message)
                    })

             } else{
                 IncNbrPlace({eventId:"61f3c07fe880f28fa1054ec7"},(res)=>{
                deleteEventFromUser(object,(res)=>{
                        setParticipation(false);
                        })
                    },(err)=>{
                    alert(err.message)
                    })

             }
      }

    return (
      <>
      {
        Organisateur&&(

        <ScrollView contentContainerStyle={{ flexGrow: 1, width: "100%" }}>
                <TouchableWithoutFeedback>

                    <View style={{ flexGrow: 1, width: "100%" }}>
                        
                    <Images images={ event.images } />

                        <View style={styles.header}>
                            <View>
                                <MaterialCommunityIcons name="arrow-left" size={30} color="black" style={styles.icons} />    
                            </View>
                            <View style={styles.icon}>
                                <MaterialCommunityIcons name="share-variant" size={24} color="black" style={[styles.icons,{marginRight:25}]} />
                                   <TouchableWithoutFeedback onPress={handleFavoris}> 
                                   <MaterialCommunityIcons name={favoris?"heart":"heart-outline"} size={24} color="black" style={[styles.icons, { marginRight: 10 }]} />       
                                   </TouchableWithoutFeedback>
                            </View>
                        </View>
    <View >

                        <View style={{margin:20}} >
                            <Text style={[styles.texte,{fontSize:35}]}>{event.title}</Text>
                        </View>
                        
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View style={{ flexDirection: "row",  alignItems: "center" }}>
                                <Image source={require('../assets/profile.jpg')} style={{ width:50, height:50,borderRadius:50, marginLeft: 25, marginRight: 10}}/>
                                <View>
                                    <Text style={[styles.texte,{fontSize:17}]}>{Organisateur.firstname + " "+Organisateur.lastname }</Text>
                                    <Text style={{fontSize:15,  color: colors.lightBlue}}>Organizateur</Text>
                                </View>

                            </View>
                            <Button
                                title= { Participation ? "Annuler" : "Participer" }
                                color="red"
                                buttonStyle={{
                                    borderRadius:8,
                                    marginRight:25,
                                    backgroundColor: colors.mediumOrange
                                }}
                                onPress={Participer}
                                titleStyle={{
                                    fontSize:15
                                }}
                            />

                        </View>
                        <View style={{ margin:20}}>
                            <Text style={{fontSize:17, color: colors.lightBlue , fontWeight: 'bold'}}>Sélectionner une date et une heure </Text>
                        </View>

                        <ScrollView horizontal={true} >
                <TouchableWithoutFeedback>
                <View style={{flexDirection:"row"}}>

                        {
                                Object.entries(event.schedule).map((value,index) => (
                  <TouchableWithoutFeedback onPress={()=>HourActivity(value[1][0])} key={index}>      
                        <View style={{borderWidth:2, borderColor:colors.lightBlue, marginLeft:20, width:90,justifyContent: 'center', alignItems: 'center', width:110,height:110,justifyContent:"space-between"}}>
                     
                            <Text style={[styles.texte,{fontSize:13}]}>Mercredi</Text>
                            <View style={{ width:50, height:50,borderRadius:50,backgroundColor:colors.mediumBlue, alignItems: 'center', justifyContent: 'center'}}>
                                         <Text style={{fontWeight: 'bold',color:"#ffffff99"}}>5</Text>
                                   </View>
                            <Text style={{fontWeight: 'bold',color: colors.lightBlue}}>JANV. 2022</Text>
                                   
                            <Text style={[styles.texte,{fontSize:10}]}>{heureDebutActivity}</Text>
                        </View>
                       
                  </TouchableWithoutFeedback>
                       ))
                    }
                </View>
                      
                </TouchableWithoutFeedback>
                        </ScrollView>

                        <View>
                           
                       
                        <View style={{margin: 20}}>
                                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                                <MaterialCommunityIcons name="calendar-blank" size={24} style={{marginRight:10,color:colors.xLightBlue}} />
                                                <Text style={[styles.texte,{fontSize:15}]} > {nameActivity}</Text>
                                            </View> 
                                            <View >
                                            <Text style={{marginLeft:37,fontSize:14,color: colors.lightBlue }}>Commence à {heureDebutActivity}</Text>

                                            </View>
                        </View>
                        <View style={{marginLeft:20, marginTop:0}}>
                                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                                <MaterialCommunityIcons name="currency-usd" size={24} style={[styles.icons,{marginRight:10,color:colors.xLightBlue}]} />
                                                <Text style={[styles.texte,{fontSize:15}]} > {event.price} par place</Text>
                                            </View> 
                                           
                        </View>
                        <View style={{marginLeft:20, marginTop:12 }}>
                                            <View style={{flexDirection:"row",alignItems:"center"}}>
                                                <MaterialCommunityIcons name="chair-rolling" size={24} style={[styles.icons,{marginRight:10,color:colors.xLightBlue}]} />
                                                <Text style={[styles.texte,{fontSize:15}]} > {event.nbrplace} personnes</Text>
                                            </View> 
                                           
                        </View>
         
                        <View style={{margin:20}}>
                            <Text style={[styles.texte,{fontSize:17}]}>À propos</Text>
                                <View style={{flex:1,height:40}}>
                                <WebViewQuillJS
                                backgroundColor={"#fff"}
                                content={event.description}
                                isReadOnly
                                />
                            </View>
                        </View>
                        <View style={{marginLeft:20, marginTop:0}}>
                        <Text style={[styles.texte,{fontSize:17}]}>Lieu</Text>
                         <View style={styles.container}>
                                <MapView style={styles.map} initialRegion={event.location}  >
                                <Marker coordinate={event.location} />
                                </MapView>
                                </View>
                        </View>
    </View>
                        
</View>   
                    </View>
                </TouchableWithoutFeedback>
            
        </ScrollView>
        )
      }
      </>

    )
}

const styles = StyleSheet.create({
    header: {
        width:"100%",
        height:"10%",
        padding:20,
        backgroundColor:"#00000033",
        position:"absolute",
        top:0,
        flexDirection:"row",
        justifyContent:"space-between"

    },
    backgroundImage:{
        flex: 1,
        alignItems: "center",
        width: "100%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon:{
        flexDirection:"row",
    },
    texte:{
        fontWeight: "bold",
        color: colors.lightBlue,

    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    map: {
        width: 330,
        height:200,
        justifyContent: 'center',
        
      },
   container:{
       width:330,
       marginTop:7
   }
    
})
