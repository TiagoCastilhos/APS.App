import React from 'react';
import { Card, CardItem, Body, Text, Icon, Right } from 'native-base';

const RuleCard = (props) => {
    return (
        <Card>
            <CardItem>
                <Body>
                    <Text>
                        Site: {props.siteUri}
                    </Text>
                    <Text>
                        Data de criação: {props.creationDate.split('T')[0]}
                    </Text>
                </Body>
                <Right>
                    <Icon type="FontAwesome" name="remove" onPress={props.deleteRule}/>
                </Right>
            </CardItem>
        </Card>
    )
}

export default RuleCard;