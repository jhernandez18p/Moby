import React, { Component } from 'react';

// Components
import DOMPurify from 'dompurify';

// Redux
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

// Actions 
import { fetchQuestions } from '../../../redux/actions/faq/question';
import { fetchAnswers } from '../../../redux/actions/faq/answer';

class FAQ extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.onFetchQuestions();
            this.props.onFetchAnswers();
        }, 200);
    };

    componentDidUpdate() {
        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }
    }

    getAnswer(id){
        
    }

    render() {

        const filter = (array, key, val) => {
            let filtered_array = [];
            array.forEach(function (element) {
                if (element[key] === val) {
                    filtered_array.push(element);
                }
            });
            return filtered_array;
        };

        let questions = this.props.questions || 'Cargando ...';
        let answers = this.props.answers || 'Cargando ...';

        let faqs = <div />;
        let _faq = <div />;
        let answer = [];

        if (questions.count !== undefined) {
            _faq = questions.results.map(
                (re, i) => {
                    // this.getAnswer(re.id);
                    answer.push(filter(answers.results,'question',re.id));
                    if(answer[i][0]){
                        let html = (
                            <div key={re.id.toString()} className="is-padding-bottom-30">
                                <button className="accordion">{re.title}</button>
                                <div className="panel">
                                    <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(answer[i][0].text) }}></div>
                                </div>
                            </div>
                        )
                        return html;
                    }else{
                        return <div  key={re.id.toString()}/>;
                    }

                }
            );
            faqs = (
                <div className="accordions">
                    {_faq}
                </div>
            );
        }
        return (
            <div className="container">
                <div className="columns">
                    <div className="column">
                        {faqs}
                    </div>
                </div>
            </div>
        );
    }
}


const answersSelector = createSelector(state => state.answers, answers => answers);                                              // Answers
const questionsSelector = createSelector(state => state.questions, questions => questions);                                      // questions

const mapStateToProps = createSelector(
    answersSelector,
    questionsSelector,
    (answers, questions) => (
        {
            answers,
            questions,
        }
    )
);

const mapDispatchToProps = (dispatch, props) => {
    return bindActionCreators(
        {
            onFetchAnswers: fetchAnswers,
            onFetchQuestions: fetchQuestions,
        }, dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(FAQ);
