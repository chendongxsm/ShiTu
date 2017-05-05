/**
 * Created by Rabbit on 2017/5/4.
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Image from 'react-native-image-progress';
import * as Progress from 'react-native-progress';
import Button from '../component/Button';

export default class GankListItem extends Component {

    static defaultProps = {
        navigate: React.PropTypes.object,
        itemData: React.PropTypes.object,
    };

    constructor(props){
        super(props);
        this.state = {
            isFullImage:false,
        }
    }

    _onLayout(event){
        // console.log(event.nativeEvent.layout);
    }

    _onProgress(loaded,total){
        // console.log(loaded);
        // console.log(total);
    }

    render() {
        let imageHeight,imageWidth;
        let {itemData} = this.props;
        if (itemData.imageHeight && itemData.imageWidth){
            // console.log('图片默认宽度:'+itemData.imageWidth);
            // console.log('图片默认高度:'+itemData.imageHeight);

            imageWidth = SCREEN_WIDTH;
            imageHeight = itemData.imageHeight;
            // console.log('SCREEN_HEIGHT:' + SCREEN_HEIGHT);
            if (imageHeight > SCREEN_HEIGHT) {
                imageHeight = itemData.imageWidth / itemData.imageHeight * SCREEN_WIDTH;
            }
            // console.log(`裁剪后:${imageHeight}`);
        }
        // let height = SCREEN_HEIGHT;

        return (
            <View style={{marginTop:5,backgroundColor:'white'}}>
                <Text style={styles.itemTitleStyle}>{itemData.desc}</Text>
                {
                    itemData.isImage > 0
                        ?
                        <Button
                            isCustom={true}
                            customView={
                                <Image source={{uri:itemData.images[0]}}
                                 style={[{height:imageHeight,width:imageWidth,resizeMode:'contain'}]}
                                 onLayout={this._onLayout}
                                 indicator={Progress.CircleSnail}

                                 onProgress={(e)=>this._onProgress(e.nativeEvent.loaded,e.nativeEvent.total)}
                            />
                            }
                            onPress={()=>{}}
                        />

                        : null

                }
                <View style={{flexDirection:'row'}}>
                    <Text style={[styles.itemTitleStyle,{fontSize:FONT_SIZE(14)}]}>
                        {itemData.who}
                    </Text>
                    <Text style={[styles.itemTitleStyle,{fontSize:FONT_SIZE(14)}]}>
                        {itemData.publishedAt}
                    </Text>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    itemTitleStyle:{
        fontSize:FONT_SIZE(16),
        padding:5
    }
});

