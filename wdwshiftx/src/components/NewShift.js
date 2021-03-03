import React from 'react';
import styled from 'styled-components';
import NewShiftInput from './NewShiftInput';

function NewShift() {
	return (
		<Container>
			<Title>Add Shift To:</Title>
			<SubTitle>Really Long Group Name</SubTitle>
			<FormContainer>
				<NewShiftInput />
			</FormContainer>
		</Container>
	);
}

export default NewShift;

const Container = styled.div`
	display: grid;
	grid-template-rows: min-content auto;
	text-align: center;
`;

const Title = styled.h1`
	font-style: italic;
`;

const SubTitle = styled.h3`
	font-style: italic;
`;

const FormContainer = styled.div`
	width: 450px;
	margin: 0 auto;
`;