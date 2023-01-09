import { Component } from 'react';
import { SliderContainer, TasksWrapper, SwipeButton } from './Slider.styled';

//========== components ==========
import Profile from "../Profile/Profile";
import Statistics from "../Statistics/Statistics";
import FriendList from '../FriendList/FriendList';
import TransactionHistory from "../TransactionHistory/TransactionHistory";

//========== data ==========
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

class Slider extends Component {
    state = {
        translate: 0,
    }

    swipeLeft = () => {
        if (this.state.translate === 0) {
            this.setState(prevState => prevState.translate -= 450);
        } else {
            this.setState(prevState => prevState.translate += 150);
        }
    }

    swipeRight = () => {
        if (this.state.translate !== -900) {
            this.setState(prevState => prevState.translate -= 150);
        } else {
            this.setState(prevState => prevState.translate = 0);
        }
    }

render() {
    return <SliderContainer>
                <SwipeButton type="button" onClick={(this.swipeLeft)}>&lt;</SwipeButton>
                <TasksWrapper position={this.state.translate}>
                    
                    <Profile
                        userName={user.username}
                        tag={user.tag}
                        location={user.location}
                        avatar={user.avatar}
                        stats={user.stats} />

                    <Statistics
                        title="Upload stats"
                        stats={data} />

                    <FriendList friends={friends} />

                    <TransactionHistory
                        items={transactions} />
                </TasksWrapper>
                <SwipeButton type="button" onClick={this.swipeRight}>&#62;</SwipeButton>
            </SliderContainer>;
    }
}

export {Slider}
