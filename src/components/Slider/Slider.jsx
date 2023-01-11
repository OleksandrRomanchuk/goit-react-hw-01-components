import { Component } from 'react';
import { SliderContainer, TasksWrapper, SwipeButton, Window } from './Slider.styled';

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
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

class Slider extends Component {
    state = {
        translate: 0,
    }

    swipeLeft = () => {
        if (this.state.translate === 0) {
            this.setState(prevState => prevState.translate -= 900);
        } else {
            this.setState(prevState => prevState.translate += 300);
        }
    }

    swipeRight = () => {
        if (this.state.translate !== -900) {
            this.setState(prevState => prevState.translate -= 300);
        } else {
            this.setState(prevState => prevState.translate = 0);
        }
    }

    render() {
    return <SliderContainer>
                <SwipeButton type="button" onClick={(this.swipeLeft)}>
                    <BsArrowLeftCircle />
                </SwipeButton>
                <Window>
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
                </Window>
                <SwipeButton type="button" onClick={this.swipeRight}>
                    <BsArrowRightCircle />
                </SwipeButton>
            </SliderContainer>;
    }
}

export { Slider };
