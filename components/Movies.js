import React,{useState} from 'react'
import { Dimensions,TouchableWithoutFeedback } from 'react-native'
import styled from 'styled-components/native'
import {useSpring, animated, config} from 'react-spring'

const Container = styled.View`
	padding: 20px 0;
`

const Label = styled.Text`
	color: #fff;
	font-size: 16px;
	margin: 0 0 5px 10px;
`
const MovieScroll = styled.ScrollView`
	padding-left: 10px;
`

const MoviePoster = styled.Image`
	width: ${Math.round((Dimensions.get('window').width * 28) / 100)}px;
	height: 150px;
`

const MovieCard = styled.View`
	padding-right: 9px;
`
const ΑnimatedMoviePoster = animated(MoviePoster);


const Movies = ({ label, item }) => {

	const [pressedIn, setPressedIn] = useState({pressedIn: false, item: null});
	const props = useSpring({
		to: {
			width: Math.round((Dimensions.get('window').width * 50) / 100),
			height:200
		},
		from: {
			width: Math.round((Dimensions.get('window').width * 28) / 100),
			height: 150
		},
		config: {
			duration:1000,
			friction: 10,
			tension:500,
			mass: 200
		},
	})

	return (
		<Container>
			<Label>{label}</Label>
			<MovieScroll horizontal>
				{item.map((movie, item) => {
					return (
						<MovieCard key={String(item)}>
							<TouchableWithoutFeedback
								onPressOut={() => {
									setPressedIn({pressedIn: false, item : null});
								}}
								onPressIn={() => {
									setPressedIn({pressedIn: true, item : item})
								}}
							>
								<ΑnimatedMoviePoster style={pressedIn.item === item ? props : null} resizeMode='cover' source={movie} />
							</TouchableWithoutFeedback>
							
						</MovieCard>
					)
				})}
			</MovieScroll>
		</Container>
	)
}

export default Movies
