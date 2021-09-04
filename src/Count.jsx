import {connect} from 'react-redux'

const mapStateToProps= state =>{
    return{
        count: state.count
    }
}

const Count = ({count,text}) =>{
    return(
        <>
        {count}
        </>
    )
}

export default connect(mapStateToProps)(Count)