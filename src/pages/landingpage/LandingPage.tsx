import * as React from "react";
import "./LandingPage.css";
import GameSelector from "../../components/GameSelector/GameSelector";
import Footer from "../../blocks/Footer/Footer";
import { Image } from "semantic-ui-react";
import { ServerStatsState } from "../../store/ServerStats/reducer";
import { RootState } from "../../store/root-reducer";
import { connect } from "react-redux";
import { loadStats } from "../../store/ServerStats/actions";

export interface LandingPageProps {
	loadStats: typeof loadStats;
	timer: NodeJS.Timer | null;
}

class LandingPage extends React.Component<LandingPageProps & ServerStatsState, any> {

	componentDidMount() {
		this.setState({ timer: setInterval(() => this.getOnlinePlayers(), 10000) });
		this.getOnlinePlayers();
	}

	componentWillUnmount() {
		this.setState({ timer: null });
	}

	getOnlinePlayers() {
		return this.props.loadStats();
	}

	render() {
		const listOfGames = [
			{
				imageSrc: "/GameSelectorFortnite-640x360.png", title: "Fortnite - Battle Royale",
				playerCount: this.props.fortnitePlayerOnline ? this.props.fortnitePlayerOnline : NaN
			},
			{ imageSrc: "/GameSelectorLeagueOfLegends-640x360.png", title: "League of Legends", playerCount: 1 }];
		return (
			<div className="landing-page">
				<div className="page-content">
					<Image centered style={{ width: 297, height: 246 }} src="/BUDDYGG-LOGO-3.png" />
					<GameSelector listOfGames={listOfGames} />
				</div>
				<Footer />
			</div>
		);
	}

}

const mapStateToProps = (state: RootState) => state.serverStats;
export default connect(mapStateToProps, {
	loadStats: loadStats
})(LandingPage);
