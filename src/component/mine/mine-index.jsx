import React from  'react';
import ReactDOM from 'react-dom';
class RaDimension extends React.Component{
    constructor(props){
        super();
        this.state={
            raReady:props.raReady.data.node,
            relationShip:props.raReady.data.event.AS_MEMBER,
            actionHtml:[],
            curProp:[],
            classMembers:[],
            selectable: false,
            showCheckboxes: false,
        };
        this.changeHeader=this.changeHeader.bind(this);
        this.deleteHeader=this.deleteHeader.bind(this);
        this.fillText=this.fillText.bind(this);
        this.selectDimension=this.selectDimension.bind(this);
        this.className=this.className.bind(this);
        this.showEmpty=this.showEmpty.bind(this);
    }

    //页面渲染
    render(){
        const {curProp,actionHtml,classMembers}=this.state;
        let member=0,tableRight=[],tableabc=[],tableRightsContent=[];
        var leftClassName= this.className();
        var max= this.tableClass();
        var tabHead=document.querySelectorAll(".headers");
        return (
            <Card>
                <div className="Dname">
                    <TextField
                        hintText="维表名称"
                        floatingLabelText="维表名称"
                        onChange={this.fillText.bind(this)}/><br/>
                    <TextField
                        hintText="描述"
                        floatingLabelText="描述"
                        onChange={this.fillText.bind(this)}/><br/>
                    <TextField
                        hintText="起始类编码"
                        floatingLabelText="起始类编码"
                        onChange={this.fillText.bind(this)}/><br/>
                </div>
                <div className="dimension-main">
                    <div style={{width:"10%"}}>
                        <Table style={{width:"100%"}}  border="1" cellpadding="0" cellspacing="0" >
                            <TableHeader className="header" displaySelectAll={this.state.showCheckboxes} adjustForCheckbox={this.state.showCheckboxes}>
                                <TableRow className="listHead"  style={{border:"0px"}}>
                                    <TableHeaderColumn className="test">
                                        所有类
                                    </TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody  displayRowCheckbox={this.state.showCheckboxes}>
                                {leftClassName}
                            </TableBody>
                        </Table>
                    </div>
                    <div style={{width:"3%"}}></div>
                    <div className="tableBox"  style={{width:"87%"}}>
                        <Table  className="mainTab" border="1" cellpadding={0} cellspacing={0}  style={{width:"100%"}}>
                            <TableHeader displaySelectAll={this.state.showCheckboxes}
                                         adjustForCheckbox={this.state.showCheckboxes}>
                                <TableRow>
                                    {curProp}{actionHtml}
                                    <TableHeaderColumn></TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody displayRowCheckbox={this.state.showCheckboxes}>
                                <TableRow>
                                    {max}
                                    <TableRowColumn></TableRowColumn>
                                </TableRow>

                            </TableBody>
                        </Table>
                    </div>
                </div>
            </Card>
        )
    }
}
export default RaDimension;