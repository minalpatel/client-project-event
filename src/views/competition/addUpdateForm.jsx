import React, {Component} from 'react';
import {Form, Input, Radio, DatePicker, InputNumber} from "antd";
import PropTypes from 'prop-types';
import * as moment from 'moment/moment';
const Item = Form.Item;
const {RangePicker} = DatePicker;
const { TextArea } = Input;

class AddUpdateForm extends Component {
  
  static propTypes = {
    setForm: PropTypes.func.isRequired,
    competition: PropTypes.object,
  };

  componentWillMount() {
    this.props.setForm(this.props.form)
  }

  render() {
    console.log(this.props.competition);
    const {getFieldDecorator} = this.props.form;
    const {event_title, event_logo, event_desc, company_name, event_time, event_location, event_date, total_seat} = this.props.competition;

    const formLayout = {
      labelCol: {span: 6},
      wrapperCol: {span: 16}
    }

    return (
      <div>
        <Form {...formLayout}>
          <Item label="Title" >
            {
              getFieldDecorator('event_title', {
                initialValue: event_title || '',
                rules: [
                  {required: true, message: 'name is required'}
                ]
              })(
                <Input type="text" placeholder="please enter Event Title"/>
              )
            }
          </Item>
          <Item label="picture">
            {
              getFieldDecorator('event_logo', {
                initialValue: event_logo || ''
              })(
                <Input type="text" placeholder="please enter subName"/>
              )
            }
          </Item>
          <Item label="Date">
            {
              getFieldDecorator('event_date', {
                initialValue: event_date || '',
              })(
                  <Input type="Date" placeholder="yyyy-mm-dd"/>
              )
            }
          </Item>
          <Item label="Discription">
            {
              getFieldDecorator('event_desc', {
                initialValue: event_desc || '',
              })(
                <TextArea  autoSize={{ minRows: 4, maxRows: 4 }} placeholder="please enter your event description"/>
              )
            }
          </Item>
          <Item label="Time">
            {
              getFieldDecorator('event_time', {
                initialValue: event_time || '',
              })(
                <Input type="Time" placeholder="please enter Event Time"/>
              )
            }
          </Item>
          <Item label="Location">
            {
              getFieldDecorator('event_location', {
                initialValue: event_location || '',
              })(
                <Input type="text" placeholder="Enter location" />
              )
            }
          </Item>
          <Item label="Company Name">
            {
              getFieldDecorator('company_name', {
                initialValue: company_name || '',
              })(
                <Input type="text" placeholder="Enter your company name"/>
              )
            }

          </Item>
          <Item label="entry">
            {
              getFieldDecorator('total_seat', {
                initialValue: total_seat || '',
                rules:[
                  { type: 'number', min: 0 }
                ]
              })(
                <InputNumber/>
              )
            }
          </Item>
        </Form>
      </div>
    );
  }
  
}

export default Form.create()(AddUpdateForm);