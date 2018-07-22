
import React, { Component } from 'react'
import { Card, CardSection, Input, Button } from './common'

export default class EmployyeCreate extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            lable="Name",
          placeholder="Rizwan"
        />
        </CardSection>
        <CardSection>
          <Input
            lable="Phone",
          placeholder="03135561765"
        />
          </CardSection>
        <CardSection>

        </CardSection>
        <CardSection>
          <Button>Create</Button>
        </CardSection>
      </Card>
    )
  }
}
