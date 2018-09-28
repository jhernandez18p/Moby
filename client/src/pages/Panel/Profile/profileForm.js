import React, { Component } from 'react';

// Redux
// eslint-disable-next-line
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

class ProfileForm extends Component {

    render(){
        let method = this.props.method || 'Actualizar';
        let user = this.props.user || 'Cargando';

        let userName = 'Guest';
        if (user.user.first_name !== '' && user.user.last_name !== ''){
            userName = `${user.user.first_name} ${user.user.last_name}`;
        }else{
            userName = user.user.username;
        }

        return(
            <div>
                <div className="columns is-padding-top-60" id="">
                    <div className="column is-10 is-offset-1 box-animation card">
                        <div className="columns is-variable is-2 ">

                            <div className="column has-background-success">
                                <h3 className="is-size-5 has-text-left has-text-white">{method}</h3>
                            </div>

                            <div className="column has-background-success">
                                <h3 className="is-size-5 has-text-right has-text-white">
                                    {
                                        userName
                                    }
                                </h3>
                            </div>

                        </div>
                        <div className="columns is-variable is-0 is-marginless">
                                
                            <div className="column">
                                <h3 className="is-size-4">Información Personal</h3>
                            </div>
                            <div className="column is-padding-y-30">
                                {user.user.last_login}
                            </div>
                        </div>
                        <div className="columns is-variable is-0 is-marginless">
                            <div className="column is-padding-y-30">
                                {user.user.last_login}
                            </div>
                        </div>
                        <div className="columns is-variable is-0 is-marginless">
                            <div className="column is-padding-y-30">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}



// const blogSelector = createSelector(state => state.blog_post, blog_post => blog_post);                          // blog_post
// const blogTagSelector = createSelector(state => state.blog_tags, blog_tags => blog_tags);                       // blog_tags
// const brandsSelector = createSelector(state => state.brands, brands => brands);                                 // brands
// const carrouselSelector = createSelector(state => state.carrousel, carrousel => carrousel);                     // carrousel 
// const categoriesSelector = createSelector(   state => state.categories,   categories => categories );             // categories
// const departmentSelector = createSelector(state => state.departments, departments => departments);              // Department
// const imageCarrouselSelector = createSelector(state => state.img_carrousel, img_carrousel => img_carrousel);    // img_carrousel 
// const pagesSelector = createSelector(state => state.pages, pages => pages);                                     // Pages 
// const productsSelector = createSelector(state => state.products, products => products);                         // products
// const servicesSelector = createSelector(state => state.services, services => services);                         // services
// const siteSelector = createSelector(state => state.site, site => site);                                         // site
// const socialMediaSelector = createSelector(state => state.social_media, social_media => social_media);          // Social media
// const testimonialsSelector = createSelector(state => state.testimonials, testimonials => testimonials);         // Testimonials
const userSelector = createSelector(state => state.user, user => user);                                     // user

const mapStateToProps = createSelector(
  userSelector,
  (user) => (
    {
      user,
    }
  )
);

// const mapDispatchToProps = (dispatch, props) => {
//   return bindActionCreators(
//     {
//       onFetchBrands: fetchBrands,
//       onFetchBlogPost: fetchBlogPost,
//       onFetchBlogTags: fetchBlogTags,
//       onFetchCarrousels: fetchCarrousels,
//       onFetchImageCarrousels: fetchImageCarrousels,
//       onFetchDepartments: fetchDepartments,
//       onFetchPages: fetchPages,
//       onFetchProducts: fetchProducts,
//       onFetchServices: fetchServices,
//       onFetchSite: fetchSite,
//       onFetchSocialMedia: fetchSocialMedia,
//       onFetchTestimonial: fetchTestimonial,
//     }, dispatch
//   );
// }

export default connect(mapStateToProps)(ProfileForm);