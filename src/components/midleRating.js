import React from "react"
import {graphql, useStaticQuery} from "gatsby"


const MiddleRating = ()=>{

  const users = useStaticQuery(graphql`
    query MyQuery1 {
    allStrapiComments {
    edges {
      node {
        id
        rating
      }
    }
  }
  firstRating: allStrapiComments(filter: {rating: {eq: 1}}) {
    edges {
      node {
        id
        rating
      }
    }
  }
  secondRating: allStrapiComments(filter: {rating: {eq: 2}}) {
    edges {
      node {
        id
        rating
      }
    }
  }
  thirdRating: allStrapiComments(filter: {rating: {eq: 3}}) {
    edges {
      node {
        id
        rating
      }
    }
  }

  fourthRating: allStrapiComments(filter: {rating: {eq: 4}}) {
    edges {
      node {
        id
        rating
      }
    }
  }
  fifthRating: allStrapiComments(filter: {rating: {eq: 5}}) {
    edges {
      node {
        id
        rating
      }
    }
  }
}

  `)



  const firstRating = users.firstRating.edges.length;
  const secondRating = users.secondRating.edges.length;
  const thirdRating = users.thirdRating.edges.length;
  const fourthRating = users.fourthRating.edges.length;
  const fifthRating = users.fifthRating.edges.length;

  const numRating = (5 * fifthRating + 4 * fourthRating + 3 * thirdRating + 2 * secondRating + 1 * firstRating) / (fifthRating + fourthRating + thirdRating + secondRating + firstRating)
  let middleRating = Math.floor(numRating)

  return(
    <>
    <div className="rating_text">Rating 5/5 ({users.allStrapiComments.edges.length} reviews)</div>
  <div className="rating-footer">
    <span >★</span>
    <span >★</span>
    <span >★</span>
    <span >★</span>
    <span >★</span>
    {/*{*/}
    {/*  Array.from(Array(middleRating), (ietm, i) => {*/}
    {/*    return (<span key={i}>★</span>)*/}
    {/*  })*/}
    {/*}*/}
  </div>
</>
  )
}


export default MiddleRating