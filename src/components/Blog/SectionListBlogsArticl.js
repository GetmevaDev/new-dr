// import React from "react"
// import {graphql, useStaticQuery} from "gatsby"
// import ReactMarkdown from "react-markdown"
// import {Link} from "gatsby"
//
//
// const SectionListBlogsArticle = () => {
//
//
//
//   const data = useStaticQuery(graphql`
//   query ($skip: Int!, $limit: Int!){
//    allStrapiBlogArchives(
//    sort: { fields: [frontmatter___date], order: DESC }
//       skip: $skip // This was added by the plugin
//       limit: $limit // This was added by the plugin
//    ) {
//     edges {
//       node {
//       id
//         Title
//         Data
//         Content
//       }
//     }
//   }
//   }
//   `)
//
//   return(
//     <section className="section_blog_list">
//       <h2 className="section-title">Recent Posts</h2>
//
//       <div className="container row">
//
//         {
//           data.allStrapiBlogArchives.edges.map(elem =>{
//             const title = elem.node.Title || null;
//             const articleId = elem.node.id || null;
//             const content = elem.node.Content || null;
//             return(
//                 <div className="card_article">
//                   <img src="" alt="" />
//                   <h4 className="recent-posts__item-title">
//                     <a href="#">{title}</a>
//                   </h4>
//                   <p>{content}</p>
//                   <div className="albus-blog__item-more">
//                     <a href={`/${articleId}`}>Read more →</a>
//                   </div>
//                 </div>
//               )
//
//           })
//         }
//
//
//         <Link to={props.pageContext.previousPagePath}>Previous</Link>
//         <Link to={props.pageContext.nextPagePath}>Next</Link>
//
//       </div>
//     </section>
//   )
// }
//
//
// export default SectionListBlogsArticle