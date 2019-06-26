import React from 'react';
import { Card, CardItem, Body, Text } from 'native-base';

const RuleCard = (props) => {
    return (
        <Card>
            <CardItem onLongPress={props.deleteRule}>
                <Body>
                    <Text onPress={props.deleteRule}>
                        Site: {props.siteUri}
                    </Text>
                    <Text>
                        Data de criação: {props.creationDate.split('T')[0]}
                    </Text>
                </Body>
            </CardItem>
        </Card>
    )
}

export default RuleCard;